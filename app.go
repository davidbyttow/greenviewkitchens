
package app

import (
  "html/template"
  "net/http"
)

func init() {
  http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
  var t = template.Must(template.ParseFiles("templates/page.html"))
  if err := t.Execute(w, nil); err != nil {
    http.Error(w, "", http.StatusInternalServerError)
  }
}
