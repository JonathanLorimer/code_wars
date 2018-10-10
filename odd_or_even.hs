module Kata.OddOrEven where

	oddOrEven :: [Int] -> String
	oddOrEven xs
		| even(sum(xs)) = "even"
		| otherwise = "odd"