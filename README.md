# API DOCUMENTATION

1. **Create an .env file with the .env.example constants**
2. **Install the dependencies with npm i**
3. **Run the server with npm run dev (development) or npm start (production)**
    **If you want run the server with npm start, you must build it first with npm run build**

## User

| TYPE    | DETAIL             | ROUTE                           | SEND                                                       |
| ------- | ------------------ | ------------------------------- | ---------------------------------------------------------- |
| POST    | register user      | http://URL:PORT/api/user        | body: UserEntity                                           |
| POST    | login user         | http://URL:PORT/api/auth        | body: {email, password}                                    |
| GET     | get user by id     | http://URL:PORT/api/user/:id    | params: {id}                                               |
| GET     | get all user       | http://URL:PORT/api/user/       |                                                            |

### User Entity

| KEY        | TYPE      | REQUIRED |
| ---------- | --------- | -------- |
| email      | String    |   YES    |
| fullName   | String    |   YES    |
| lastName   | String    |   YES    |
| password   | String    |   YES    |
| phone      | String    |   YES    |
| address    | String    |   YES    |
| dni        | String    |   YES    |
| country    | String    |   NO     |
| postalCode | String    |   NO     |


## Business

| TYPE    | DETAIL                | ROUTE                             | SEND                                                       |
| ------- | --------------------- | --------------------------------- | ---------------------------------------------------------- |
| GET     | get by account number | http://URL:PORT/api/business/:id  | params: {id}                                               |
| GET     | get by type/status    | http://URL:PORT/api/business      | params: {status?, transaction?}                            |
| POST    | transfer              | http://URL:PORT/api/business      | body: {type:TRANSFER, emitter, addressee, amount, subject} |
| POST    | deposit               | http://URL:PORT/api/business      | body: {type:DEPOSIT, addressee, amount, subject}           |
| POST    | payment               | http://URL:PORT/api/business      | body: {type:PAY, emitter, amount, subject}                 |
| POST    | extraction            | http://URL:PORT/api/business      | body: {type:EXTRACTION, emitter, amount, subject}          |
| DELETE  | delete by id          | http://URL:PORT/api/business/:id  | params: {id}                                               |


### Business Entity

| KEY         | TYPE      | REQUIRED |
| ----------- | --------- | -------- |
| senderId    | String    |   YES    |
| receiverId  | String    |   YES    |
| currencyId  | String    |   YES    |
| amount      | Number    |   YES    |
| status      | Status    |   YES    |
| transaction | Status    |   YES    |
| subject     | Status    |   YES    |


