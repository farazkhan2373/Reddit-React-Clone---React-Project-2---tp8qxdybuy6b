// importing 'ComponentStyleConfig' for suggestions
import {ComponentStyleConfig} from '@chakra-ui/theme'

// will add consistent styling for buttons in this file
// Each Button component of chakra will get this base style
// it like we are customizing the default style of Button Component of chakra
export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: '60px',
        fontSize: "10pt",
        fontWeight: 700,
        _focus: {
            boxShadow: "none",
        },
    },

    sizes:{
        sm:{
            fontSize: "8pt",
        },
        md:{
            fontSize: "10pt",
        },

    },
    variants: {
        solid:{
            color: "white",
            bg: "blue.500",
            _hover: {
                bg: "blue.400",
            },
        },
        outline: {
            color: 'blue.500',
            border: '1px solid',
            borderColor: "blue.500",
        },
        oauth: {
            height: "34px",
            border: '1px solid',
            borderColor: 'gray.300',
            _hover: {
                bg: "gray.50",
            },
        },
    },
}; 