module Codewars.G964.Getmiddle where

	getMiddle :: String -> String
	getMiddle s
		| odd(l) = ( s !! oddHalf ) : []
		| otherwise = ( s !! (half - 1) ) : ( s !! half ) : []
		where
			l = length(s)
			half = l `div` 2
			oddHalf = (l - 1) `div` 2
	
	