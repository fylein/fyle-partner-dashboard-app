function cov_t8bb7byq0() {
  var path = "/Users/anish/Workspace/fyle-partner-dashboard-app/src/polyfills.ts";
  var hash = "610595e5253e5fe12fc9e6c178beff951c4b250b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anish/Workspace/fyle-partner-dashboard-app/src/polyfills.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "610595e5253e5fe12fc9e6c178beff951c4b250b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_t8bb7byq0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_t8bb7byq0();

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge on the desktop, and iOS and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/** *************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/** *************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js'; // Included with Angular CLI.

/** *************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxuICogICAgICBmaWxlLlxuICpcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyByZWNlbnQgdmVyc2lvbnMgb2YgU2FmYXJpLCBDaHJvbWUgKGluY2x1ZGluZ1xuICogT3BlcmEpLCBFZGdlIG9uIHRoZSBkZXNrdG9wLCBhbmQgaU9TIGFuZCBDaHJvbWUgb24gbW9iaWxlLlxuICpcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxuICovXG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xuICovXG5cbi8qKlxuICogQnkgZGVmYXVsdCwgem9uZS5qcyB3aWxsIHBhdGNoIGFsbCBwb3NzaWJsZSBtYWNyb1Rhc2sgYW5kIERvbUV2ZW50c1xuICogdXNlciBjYW4gZGlzYWJsZSBwYXJ0cyBvZiBtYWNyb1Rhc2svRG9tRXZlbnRzIHBhdGNoIGJ5IHNldHRpbmcgZm9sbG93aW5nIGZsYWdzXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xuICogd2lsbCBwdXQgaW1wb3J0IGluIHRoZSB0b3Agb2YgYnVuZGxlLCBzbyB1c2VyIG5lZWQgdG8gY3JlYXRlIGEgc2VwYXJhdGUgZmlsZVxuICogaW4gdGhpcyBkaXJlY3RvcnkgKGZvciBleGFtcGxlOiB6b25lLWZsYWdzLnRzKSwgYW5kIHB1dCB0aGUgZm9sbG93aW5nIGZsYWdzXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXG4gKiBpbXBvcnQgJy4vem9uZS1mbGFncyc7XG4gKlxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXG4gKlxuICogVGhlIGZvbGxvd2luZyBmbGFncyB3aWxsIHdvcmsgZm9yIGFsbCBicm93c2Vycy5cbiAqXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9vbl9wcm9wZXJ0eSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggb25Qcm9wZXJ0eSBzdWNoIGFzIG9uY2xpY2tcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcbiAqXG4gKiAgaW4gSUUvRWRnZSBkZXZlbG9wZXIgdG9vbHMsIHRoZSBhZGRFdmVudExpc3RlbmVyIHdpbGwgYWxzbyBiZSB3cmFwcGVkIGJ5IHpvbmUuanNcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXG4gKlxuICogICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2sgPSB0cnVlO1xuICpcbiAqL1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBkZWZhdWx0IGZvciBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG5cblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcbiAqL1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFNBQVAsQyxDQUFtQjs7QUFHbkI7QUFDQTtBQUNBIn0=