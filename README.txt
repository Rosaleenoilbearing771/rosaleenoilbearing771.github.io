# Bandcamp dialog and iframe positioning fix

Copy the three `src/...` files from this ZIP into the matching paths in your project,
replacing the existing files.

What this changes:
- The release popup uses the normal Radix dialog lifecycle instead of the custom `keepMounted`/hidden combination.
- Opening an album only opens the popup. It does not automatically move or start a matching shared Bandcamp iframe.
- The user can start the embedded player inside the popup with its existing "Load Bandcamp player" control.
- Once loaded, the single app-level iframe is displayed above the popup overlay/content, so it is visible inside the popup.
- Other Bandcamp slots (article and release detail pages) retain their current auto-reattach behavior, so an already playing album can be restored on internal navigation.

This is a source-level correction; test the build and browser behavior after deployment. It cannot control bugs inside Bandcamp's cross-origin iframe.
