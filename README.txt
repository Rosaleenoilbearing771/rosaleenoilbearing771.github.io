BANDCAMP INTERNAL PLAYER FIX

This patch keeps Bandcamp as an internal iframe player. It does not remove embeds
or send visitors to a separate player tab.

Copy the included files into the matching paths in the project root, replacing
files with the same names. The new BandcampPlayerSlot.jsx file should be added.

Files included:
- src/routes/__root.jsx
- src/routes/quixosis.$slug.jsx
- src/components/text/BandcampPlayerProvider.jsx
- src/components/text/BandcampPlayerSlot.jsx (new)
- src/components/text/BandcampEmbed.jsx
- src/components/quixosis/ReleaseDialog.jsx

The root provider must wrap ReleasePlayerProvider so the release popup can use
the same shared player as article and release pages. The app now owns one
Bandcamp iframe, keeps it mounted across client-side route changes, and docks it
when its original page slot unmounts.
