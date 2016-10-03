(ns zuul.app
    (:require [rum.core :as rum]))

(rum/defc label [text]
   [:p text])

(defn init []
  (rum/mount (label ["Hello, Gatekeeper"]) (. js/document (getElementById "application"))))
