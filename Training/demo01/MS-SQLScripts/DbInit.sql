CREATE TABLE Books(
    Id int PRIMARY KEY NOT NULL IDENTITY(1,1),
    Title nvarchar(100) NOT NULL,
    Author nvarchar(100) NOT NULL,
    Genre  nvarchar(100) NOT NULL,
    [Read] BIT NOT NULL DEFAULT 0

);
INSERT INTO [Books]  
    SELECT 'Lord of the Rings',  'J.R.R Tolkien',  'Fantasy', 1
    UNION
    SELECT 'Carrie', 'Stephen King', 'Horror',0
    UNION
    SELECT 'La Casa de los Espiritus', 'Isabel Allende',  'Romanticism', 0