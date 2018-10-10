module MyFirstModule where

myFirstExpression :: String
myFirstExpression = "Hello World!"

myFirstFunction :: String -> String
myFirstFunction input = "Hello " ++ input ++ "!"

main :: IO ()
main = do
    input <- getLine
    print (repeatFunction input)
    where
        repeatFunction xs = replicate 3 xs