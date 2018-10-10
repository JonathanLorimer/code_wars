module SF176 where
import Data.Char
import Data.List

reverseLetter :: String -> String
reverseLetter = reverse . filterAlpha

filterAlpha :: String -> String
filterAlpha = filter isAlpha