
package app

import (
  "fmt"
  "net/http"
)

func init() {
  http.HandleFunc("/", handler)
}

const pageContent = `
<html>
  <head><title>GREENview Kitchens</title></head>
  <style>
    html, body, p {
      font-family: helvetica, arial;
      margin: 0;
    }
    .background {
      max-width: 100%;
      width: auto\9;
    }
  </style>
  <body>
    <img class="background" src="/images/background.jpg"></img>
  </body>
</html>
`

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, pageContent)
}
