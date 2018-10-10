module MyData where

    import Data.Char (toUpper)

    data Task = 
        BasicTask 
            { taskName :: String
            , taskLength :: Int } |
        ComplexTask String Int Location

    data Location = 
        School |
        Office |
        Home

    data TaskLength =
        QuarterHour |
        HalfHour |
        ThreeQuarterHour |
        Hour |
        HourAndHalf |
        TwoHours |
        ThreeHours

    task1 :: Task
    task1 = BasicTask
        { taskName = "Do assignment 1"
        , taskLength = 60 }

    task2 :: Task
    task2 = BasicTask
        { taskName = "Do Laundry"
        , taskLength = 45 }

    schoolLocation :: Location
    schoolLocation = School

    officeLocation :: Location
    officeLocation = Office

    homeLocation :: Location
    homeLocation = Home

    -- GETTER METHODS
    -- taskName :: Task -> String
    -- taskName (BasicTask name _) = name

    -- taskLength :: Task -> Int
    -- taskLength (BasicTask _ time) = time

    tripleTaskLength :: Task -> Task
    tripleTaskLength task = task { taskLength = 3 * (taskLength task)}