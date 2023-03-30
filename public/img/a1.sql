create database db_cap2;
use db_cap2;

create table Event(
	Event_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Employee_ID INT,
	FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID),
    Event_Name nvarchar(255),
    Start_Time datetime,
    Finish_Time datetime,
    Description nvarchar(255)
);

create table Employee_Role(
	Role_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Role_Name nvarchar(255)
);

create table Class(
	Class_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Employee_ID int,
    FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID),
    Club_ID int,
    FOREIGN KEY (Club_ID) REFERENCES Club(Club_ID),
    Class_Name nvarchar(255),
    NumberOfMembers int,
    Description	nvarchar(255)
);


create table Employee(
	Employee_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Shift_ID INT,
	FOREIGN KEY (Shift_ID) REFERENCES Shift(Shift_ID),
    Account_ID INT,
	FOREIGN KEY (Account_ID) REFERENCES Account(Account_ID),
    Role_ID INT,
	FOREIGN KEY (Role_ID) REFERENCES Employee_Role(Role_ID),
    Employee_Name nvarchar(255),
    DayOfBirth date,
    Gender nvarchar(50),
    Phone int,
    Email nvarchar(255),
    Degree nvarchar(255),
    Experience nvarchar(255)
);


create table Shift(
	Shift_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ShiftName nvarchar(50),
    StartTime datetime,
    FinishTime datetime,
    WorkingHour datetime
);

create table Schedule(
	Schedule_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    DayOfWeek datetime,
    Time datetime
);

create table Membership(
	Membership_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Schedule_ID INT,
    FOREIGN KEY (Schedule_ID) REFERENCES Schedule(Schedule_ID),
    Member_ID INT,
	FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID),
	Class_ID INT,
	FOREIGN KEY (Class_ID) REFERENCES Class(Class_ID),
    Membership_Name nvarchar(255),
    Price float,
    Expiration_Date datetime
);


create table Room(
	Room_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Employee_ID INT,
    FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID),
    Club_ID INT,
    FOREIGN KEY (Club_ID) REFERENCES Club(Club_ID),
    Room_Name nvarchar(255),
    Room_Type nvarchar(255),
    Price float,
    IsBooking boolean,
    Description nvarchar(255)
);


create table Club(
	Club_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Club_Name nvarchar(255),
    Price float,
	IsBooking boolean,
	Description nvarchar(255)
);

create table Account(
	Account_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Username nvarchar(255),
    Password nvarchar(255)
);

create table Image(
	Image_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Room_ID INT,
    FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID),
    Member_ID INT,
    FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID),
    Employee_ID INT,
    FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID),
    Class_ID INT,
    FOREIGN KEY (Class_ID) REFERENCES Class(Class_ID),
    Url nvarchar(255)
);

create table Member(
	Member_ID INT NOT NULL PRIMARY KEY ,
	Account_ID INT,
    FOREIGN KEY (Account_ID) REFERENCES Account(Account_ID),
	Member_Name nvarchar(255),
    DayOfBirth date,
    Gender nvarchar(50),
    Phone int,
    Email nvarchar(255),
    Experience nvarchar(255)
);

create table Booking(
	Booking_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Member_ID INT,
    FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID),
    Room_ID INT,
    FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID),
	Date_From date,
    Date_To date,
    Status nvarchar(50)
);

create table Bill(
	Bill_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Booking_ID INT,
    FOREIGN KEY (Booking_ID) REFERENCES Booking(Booking_ID),
    Total_Price float,
    Bill_Date datetime
);


create table Payment(
	Payment_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Member_ID INT,
	FOREIGN KEY (Member_ID) REFERENCES Member(Member_ID),
    Booking_ID INT,
	FOREIGN KEY (Booking_ID) REFERENCES Booking(Booking_ID)
);
