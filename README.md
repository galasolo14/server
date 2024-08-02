# shoppingList-Node
Shopping list server used Node.js with typescript


Before strat please make sure to do:
npm insall

For development i used nodmon: npm run dev

For production you can use:
npm run start

I used ts-node for compile typescript automataclly.

i created a connection to QSL server called: GALIT
database: "shopping"
I craeted a user called sa and created a password for connect

please insert categories_tbl with the below:
USE [shopping]
GO

/****** Object:  Table [dbo].[categories_tbl]    Script Date: 01/08/2024 01:41:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[categories_tbl](
	[id] [int] NULL,
	[name] [varchar](50) NULL
) ON [PRIMARY]
GO

INSERT INTO categories_tbl VALUES (1,'מוצרי ניקיון');
INSERT INTO categories_tbl VALUES (2,'ירקות ופירות');
INSERT INTO categories_tbl VALUES (3,'גבינות');
INSERT INTO categories_tbl VALUES (4,'בשר ודגים');
INSERT INTO categories_tbl VALUES (5,'מאפים');
