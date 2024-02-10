#loading the page https://studies.cs.helsinki.fi/exampleapp/spa

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: status code 201
    deactivate server

    Note right of browser: The browser adds the note to the list and rererenders the list on the page. Afterwards the note is send as a post request to the server, which confirms reception.
```
