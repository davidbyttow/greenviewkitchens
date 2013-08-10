
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
    html, body {
      font-family: helvetica, arial;
      background-color: #EBEBEC;
    }
    .center {
      align: center;
      text-align: center;
    }
    .background {
      max-width: 100%;
      width: auto\9;
    }
  </style>
  <body>
    <div class="center">
      <img class="background" src="/images/background.jpg"></img>
    </div>
  </body>
</html>
`

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, pageContent)
}
