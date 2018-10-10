module Sheep where

lostSheep :: [Int] -> [Int] -> Int -> Int
lostSheep fs ss t = t - (sumBoth fs ss) 

sumBoth :: [Int] -> [Int] -> Int
sumBoth fs ss = sum[sum fs, sum ss]