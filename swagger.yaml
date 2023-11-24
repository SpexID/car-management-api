openapi: 3.0.0
info:
  title: Car Rental API
  version: 1.0.0
  description: API for managing car rental services

servers:
  - url: http://localhost:8000/api

paths:
  /cars:
    get:
      summary: Get a list of cars
      description: Returns a list of all available cars.
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              example:
                data:
                  - carid: 1
                    nama: "Car 1"
                    sewa: 100
                    ukuran: "Medium"
                    gambar: "car1.jpg"
                  - carid: 2
                    nama: "Car 2"
                    sewa: 150
                    ukuran: "Large"
                    gambar: "car2.jpg"

    post:
      summary: Create a new car
      description: Create a new car with the provided details.
      requestBody:
        required: true
        content:
          application/json:
            example:
              nama: "New Car"
              sewa: 120
              ukuran: "Small"
              gambar: "new_car.jpg"
      responses:
        '201':
          description: Car created successfully
          content:
            application/json:
              example:
                data:
                  carid: 3

  /cars/{id}:
    get:
      summary: Get details of a specific car
      description: Returns details of a car based on the provided ID.
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the car
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              example:
                data:
                  carid: 1
                  nama: "Car 1"
                  sewa: 100
                  ukuran: "Medium"
                  gambar: "car1.jpg"

    put:
      summary: Update details of a specific car
      description: Update details of a car based on the provided ID.
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the car
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            example:
              nama: "Updated Car"
              sewa: 130
              ukuran: "Medium"
              gambar: "updated_car.jpg"
      responses:
        '204':
          description: Car updated successfully

    delete:
      summary: Delete a specific car
      description: Delete a car based on the provided ID.
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the car
          schema:
            type: integer
      responses:
        '204':
          description: Car deleted successfully
