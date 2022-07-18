import { Request, Response } from "express";
import Menu from "../Models/menuModel";

/* get all Menu */
export const getAll = async (req: Request, res: Response) => {
  try {
    const menu = await Menu.find({});
    if (!menu) return res.status(404).json({ message: "no menu found" });

    res.json({ results: menu.length, data: menu });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
};

/* add new Menu */
export const add = async (req: Request, res: Response) => {
  try {
    const menu = await Menu.findOne({ name: req.body.name });
    if (menu)
      return res.status(400).json({ message: "menu name already exist" });

    // create menu
    await Menu.create(req.body);
    res.json({ success: "Added ✅" });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
};

/* edit Menu */
export const edit = async (req: Request, res: Response) => {
  try {
    // update menu
    await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: "Here" });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
};

/* delete Menu */
export const remove = async (req: Request, res: Response) => {
  try {
    // remove  menu
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ success: "Here" });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
};
