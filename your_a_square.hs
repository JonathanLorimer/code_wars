module Codewars.Kata.Square where

isSquare :: Integral n => n -> Bool
isSquare = isInt . sqrt . fromIntegral

isInt x = x == fromInteger (round x)