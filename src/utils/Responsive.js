export class Responsive {
  static matchesBreakpoint(breakpoint) {
    switch (breakpoint) {
      case "phone":
        return window.matchMedia("screen and (max-width: 640px)").matches;

      case "tablet":
        return window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)").matches;

      case "tablet-and-up":
        return window.matchMedia("screen and (min-width: 641px)").matches;

      case "pocket":
        return window.matchMedia("screen and (max-width: 1007px)").matches;

      case "lap":
        return window.matchMedia("screen and (min-width: 1008px) and (max-width: 1279px)").matches;

      case "lap-and-up":
        return window.matchMedia("screen and (min-width: 1008px)").matches;

      case "desk":
        return window.matchMedia("screen and (min-width: 1280px)").matches;

      case "widescreen":
        return window.matchMedia("screen and (min-width: 1600px)").matches;

      case "supports-hover":
        return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }
  }

  static getCurrentBreakpoint() {
    if (window.matchMedia("screen and (max-width: 640px)").matches) {
      return "phone";
    }

    if (window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)").matches) {
      return "tablet";
    }

    if (window.matchMedia("screen and (min-width: 1008px) and (max-width: 1279px)").matches) {
      return "lap";
    }

    if (window.matchMedia("screen and (min-width: 1280px)").matches) {
      return "desk";
    }
  }

  static matchesBreakpointWithoutMatchs(breakpoint) {
    switch (breakpoint) {
      case "phone":
        return window.matchMedia("screen and (max-width: 640px)");

      case "tablet":
        return window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)");

      case "tablet-and-up":
        return window.matchMedia("screen and (min-width: 641px)");

      case "pocket":
        return window.matchMedia("screen and (max-width: 1007px)");

      case "lap":
        return window.matchMedia("screen and (min-width: 1008px) and (max-width: 1279px)").matches;

      case "lap-and-up":
        return window.matchMedia("screen and (min-width: 1008px)");

      case "desk":
        return window.matchMedia("screen and (min-width: 1280px)");

      case "widescreen":
        return window.matchMedia("screen and (min-width: 1600px)");

      case "supports-hover":
        return window.matchMedia("(hover: hover) and (pointer: fine)");
    }
  }
}
