import {
  Caveat,
  Inter,
  JetBrains_Mono,
  Roboto_Mono,
  VT323,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const vt = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const caveat = Caveat({
  weight: "variable",
  subsets: ["latin"],
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
