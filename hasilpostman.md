# 🚀 Postman Testing — Mini Library API

Berikut adalah contoh hasil *testing* menggunakan Postman untuk API perpustakaan.

## GET /
**Request:**  
GET http://localhost:5000

**Response:**
```json
{
  "message": "Library API running...",
  "waktu_proses": "1ms"
}


GET http://localhost:5000/api/books

{
    "success": true,
    "message": "Daftar buku",
    "data": [
        {
            "id": "1",
            "title": "Sousou no Frieren",
            "author": "Yamada Kanehito",
            "tahun": 2020,
            "stok": 5,
            "description": "Sebuah kisah perjalanan Frieren setelah perpisahan dengan pahlawan."
        },
        {
            "id": "2",
            "title": "Namae no Nai Eiyuu",
            "author": "Yuuya",
            "tahun": 2025,
            "stok": 3,
            "description": "Novel fantasi tentang pahlawan tanpa nama yang dilupakan sejarah."
        },
        {
            "id": "3",
            "title": "Make Heroine ga Oosugiru!",
            "author": "Takibi Amamori",
            "tahun": 2021,
            "stok": 4,
            "description": "Kisah romcom dengan kandidat heroine yang… terlalu banyak."
        }
    ],
    "search_result": {
        "total": 3
    }
}

GET http://localhost:5000/api/members

{
    "success": true,
    "message": "Daftar member",
    "data": [
        {
            "id": "1",
            "name": "Test Member 1",
            "email": "member1@example.com",
            "joinedAt": "2024-01-01"
        },
        {
            "id": "2",
            "name": "Test Member 2",
            "email": "member2@example.com",
            "joinedAt": "2024-02-15"
        },
        {
            "id": "3",
            "name": "Test Member 3",
            "email": "member3@example.com",
            "joinedAt": "2024-03-20"
        }
    ],
    "search_result": {
        "total": 3
    }
}

GET http://localhost:5000/api/books/1

{
    "success": true,
    "message": "Detail buku",
    "data": {
        "id": "1",
        "title": "Sousou no Frieren",
        "author": "Yamada Kanehito",
        "tahun": 2020,
        "stok": 5,
        "description": "Sebuah kisah perjalanan Frieren setelah perpisahan dengan pahlawan."
    }
}

GET http://localhost:5000/api/members/1

{
    "success": true,
    "message": "Detail member",
    "data": {
        "id": "1",
        "name": "Test Member 1",
        "email": "member1@example.com",
        "joinedAt": "2024-01-01"
    }
}

POST http://localhost:5000/api/books

{
    "success": true,
    "message": "Buku dibuat",
    "data": {
        "id": "4-2024",
        "title": "New Book",
        "author": "Anonim",
        "tahun": 2024,
        "stok": 10,
        "description": "Buku baru untuk testing"
    }
}

POST http://localhost:5000/api/members

{
    "success": true,
    "message": "Member dibuat",
    "data": {
        "id": "4",
        "joinedAt": "2025-12-06T02:45:46.705Z",
        "name": "Member Baru",
        "email": "baru@example.com"
    }
}