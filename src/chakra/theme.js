// I installed chakra ui fonts first and then imported
// 300 400 700 is the font weights
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { Button } from "./button"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
//   giving font family almost same as reddit 
  fonts: {
    body: "Open Sans, sans-serif"
  },

//   This syles will apply globaly
  styles: {
   global: ()=> ({
    body: {
        bg: "gray.200",
    }
   })
  },
//   will style components like button through this
  components:{
    Button,
  }
})