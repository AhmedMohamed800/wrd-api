# Tafsir RESTful API Documentation

This RESTful API provides access to Quranic Tafsir data. You can use this API to retrieve Tafsir information for specific Quranic verses by providing a Tafsir ID and text query.

## Table of Contents

1. [Endpoint](#endpoint)
2. [Request](#request)
3. [Response](#response)
4. [Error Handling](#error-handling)

---

## 1. Endpoint

The API endpoint for accessing Tafsir data is:

/api/v1/tafsir/:tafsir_id/:text

- `:tafsir_id`: The ID of the Tafsir you want to retrieve.
- `:text`: The text query to search for in the Quranic verses.

---

## 2. Request

### HTTP Method

- `GET`

### Parameters

- `tafsir_id` (URL Parameter): The ID of the Tafsir you want to retrieve.

  - `1`: التفسير الميسر
  - `2`: تفسير الجلالين
  - `3`: تفسير السعدي
  - `4`: تفسير ابن الكثير
  - `5`: تفسير الوسيط لطنطاوي
  - `6`: تفسير البغوي
  - `7`: تفسير القرطبي
  - `8`: تفسير الطبري

- `text` (URL Parameter): The text query to search for in the Quranic verses.

### Example Request

To retrieve Tafsir data for a specific Tafsir ID and text query, you can make a GET request to the following endpoint:

Replace **:tafsir_id** with the desired Tafsir ID and **:text** with the text you want to search for in the Quranic verses.

Example:

```http
GET /api/v1/tafsir/tafsir_id/example_text
```

---

## 3. Response

### Success Response

- `Status Code`: `200 OK`.
- `Content Type`: `application/json`

Example Response Body

```
{
  "verse_id": 123,
  "sura_index": 2,
  "ayah_number": 255,
  "clear": "example_text",
  "text": "the veres with Arabic diacritics",
  "tafsir": {
    "tafseer_id": 4,
    "tafseer_name": "Tafsir Name",
    "text": "Tafsir content for the verse"
  }
}
```

---

## 4. Error Handling

In case of errors during API requests or database queries, the API will respond with appropriate error messages and HTTP status codes to help you diagnose and troubleshoot issues.

### Error Response

- **Status Code**: `500 Internal Server Error`
- **Content Type**: `application/json`

#### Example Error Responses

**Error in Tafseer API:**

```
{
  "error": "Error in tafseer API. Please check the external Tafseer API or try again later."
}
```

**Error in Database:**

```
{
  "error": "Error querying the database. Please check the database connection or try again later."
}
```

**Error ayah not found:**

```
{
  "error": "There is no tafseer for this verse. Please check the verse or try again later."
}
```

