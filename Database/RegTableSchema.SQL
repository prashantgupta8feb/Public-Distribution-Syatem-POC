CREATE TABLE [dbo].[Registrations] (
    [Id]             INT            IDENTITY (1000, 1) NOT NULL,
    [FullName]       NVARCHAR (MAX) NULL,
    [Email]          NVARCHAR (MAX) NULL,
    [PhoneNumber]    NVARCHAR (MAX) NULL,
    [BirthDate]      DATETIME       NULL,
    [Gender]         NVARCHAR (MAX) NULL,
    [StreetAddress1] NVARCHAR (MAX) NULL,
    [StreetAddress2] NVARCHAR (MAX) NULL,
    [State]          NVARCHAR (MAX) NULL,
    [City]           NVARCHAR (MAX) NULL,
    [Region]         NVARCHAR (MAX) NULL,
    [PostalCode]     NVARCHAR (MAX) NULL,
    [District]       NVARCHAR (MAX) NULL,
    [Tehsil]         NVARCHAR (MAX) NULL,
    [Fpsshop]        NVARCHAR (MAX) NULL
);