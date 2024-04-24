CREATE TABLE roles(
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(20) NOT NULL
);
CREATE TABLE users(
   user_id INT AUTO_INCREMENT PRIMARY KEY,
   user_name VARCHAR(20),
   phone_number VARCHAR(20),
   email VARCHAR(255) NOT NULL,
   password VARCHAR(100) NOT NULL,
   is_active TINYINT(1) DEFAULT 1,
   created_at DATETIME,
   updated_at DATETIME,
) AUTO_INCREMENT = 1000000;
CREATE TABLE user_roles (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);
CREATE TABLE tokens(
    token_id int PRIMARY KEY AUTO_INCREMENT,
    token varchar(255) UNIQUE NOT NULL,
    token_type varchar(50) NOT NULL,
    expiration_date DATETIME,
    refresh_token varchar(255) UNIQUE NOT NULL,
    refresh_token_date DATETIME,
    revoked tinyint(1) NOT NULL,
    expired tinyint(1) NOT NULL,
    user_id int NOT NULL,
    user_agent VARCHAR(255),
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE profiles(
    profile_id INT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL DEFAULT "",
    last_name varchar(20) NOT NULL DEFAULT "",
    gender varchar(10) DEFAULT "male",
    address VARCHAR(50) NOT NULL,
    date_of_birth DATETIME,
    avatar TEXT,
    banner TEXT,
    FOREIGN KEY (profile_id) REFERENCES users(user_id);
);