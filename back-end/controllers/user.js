const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// @route GET /api/users
// @desc Get all users
// @access Private
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route GET /api/users/:id
// @desc Get user by ID
// @access Private
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route POST /api/users/login
// @desc Login user
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
    console.log(token);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route POST /api/users/register
// @desc Register user
// @access Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route PUT /api/users/:id
// @desc Update user by ID
// @access Private
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        role,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route DELETE /api/users/:id
// @desc Delete user by ID
// @access Private
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route GET /api/users/me
// @desc Get current user
// @access Private
const getCurrentUser = async (req, res) => {
  const userId = req.user.id; // Assuming you have authentication middleware that sets req.user

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route POST /api/users/logout
// @desc Logout user
// @access Private
const logoutUser = async (req, res) => {
  res.status(200).json({ message: "Logged out successfully. Please clear your token on client side." });
};

// Export all controller functions
module.exports = {
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
  getCurrentUser,
  logoutUser,
};