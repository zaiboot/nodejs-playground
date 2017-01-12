IF OBJECT_ID('Books',  'U') IS NOT NULL
    DROP TABLE Books;
GO
CREATE TABLE Books(
    id int PRIMARY KEY NOT NULL IDENTITY(1,1),
    title nvarchar(100) NOT NULL,
    author nvarchar(100) NOT NULL,
    genre  nvarchar(100) NOT NULL,
    [read] BIT NOT NULL DEFAULT 0

);
INSERT INTO [Books]  
    SELECT 'Lord of the Rings',  'J.R.R Tolkien',  'Fantasy', 1
    UNION
    SELECT 'Carrie', 'Stephen King', 'Horror',0
    UNION
    SELECT 'La Casa de los Espiritus', 'Isabel Allende',  'Romanticism', 0