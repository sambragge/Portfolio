package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func serveView(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./index.html")
}

func router() *mux.Router {
	r := mux.NewRouter()
	get := "GET"

	r.Methods(get).Path("/").HandlerFunc(serveView)
	r.Methods(get).Path("/project/{name}").HandlerFunc(serveView)

	return r
}

func main() {
	port := ":8000"
	router := router()
	static := http.StripPrefix("/static/", http.FileServer(http.Dir("./")))

	http.Handle("/", router)
	http.Handle("/static/", static)

	log.Print("Server listining on port ", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}
}
