module FindShortest where
	import Data.List.Split
	
	find_shortest :: String -> Integer
	find_shortest string = foldr1 min (map (fromIntegral . length) xs)
		where
			xs = splitOn " " string

			