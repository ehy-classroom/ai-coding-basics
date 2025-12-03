# Changelog


## v1.0.5

- Inhalt von `index.html` und `slides-01.html` getauscht: `index.html` ist jetzt leer, `slides-01.html` enthält die Slides.
- Link zu den Slides (`slides-01.html`) in `index.html` hinzugefügt.
- Drei Hintergrundfarben als CSS-Variablen definiert und den Slides abwechselnd zugewiesen.
- Präsentationssystem als Matrix (anfangs 2x3) mit CSS Grid und Navigation per Buttons und Tastatur umgesetzt.
- Slide-Übergang von Überblendung auf echtes Matrix-Scrolling umgestellt (CSS-Transform, Grid).
- Responsives Design für Slides und Navigation.
- Richtungsmenü oben fixiert und optisch hervorgehoben.
- Buttons zum Hinzufügen von Slides und zur Änderung der Spaltenanzahl ergänzt.
- System refaktoriert: Slides werden aus einer JSON-Struktur (`slidesData`) im JS erzeugt und gerendert.
- Dynamisches Hinzufügen von Slides und Anpassen der Spaltenanzahl über das Menü möglich.
- Slides-Daten werden jetzt aus externer Datei `data.json` geladen (Single Source of Truth für Inhalte).
- System bleibt dynamisch, aber Inhalte können auch direkt in `data.json` gepflegt werden.
