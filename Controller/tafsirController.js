const pool = require("../Data/db");
const axios = require("axios");
const cleaning = require("../Util/cleaning");

async function tafsirCont(req, res) {
  const text = cleaning(req.params.text);
  const tafsir_id = req.params.tafsir_id <= 8 ? req.params.tafsir_id : 0;

  try {
    const [tafsir] = await pool.query(
      `
    SELECT * FROM quran_verses WHERE quran_verses.clear LIKE ? LIMIT 1;
      `,
      [`%${text}%`]
    );

    if (!tafsir[0] || tafsir[0].length === 0) {
      res.status(500).json({
        error:
          "There is no tafseer for this verse. Please check the verse or try again later.",
      });
    } else {
      const sura_number = tafsir[0].sura_index;
      const aya_number = tafsir[0].ayah_number;
      const tafsir_api = `http://api.quran-tafseer.com/tafseer/${tafsir_id}/${sura_number}/${aya_number}`;
      try {
        const tafsir_data = await axios.get(tafsir_api);
        tafsir[0].tafsir = {
          tafseer_id: tafsir_data.data.tafseer_id,
          tafseer_name: tafsir_data.data.tafseer_name,
          text: tafsir_data.data.text,
        };
        res.send(tafsir[0]);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error:
            "Error in tafseer API. Please check the external Tafseer API or try again later.",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Error querying the database. Please check the database connection or try again later."
      );
  }
}

module.exports = tafsirCont;
