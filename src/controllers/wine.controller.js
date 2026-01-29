import * as wineService from "../services/wine.service.js"

export const getAllWines = (req, res) => {
    const wines = wineService.getAll();

    res.status(200).json({
        message: "Wine retrieved successfully.",
        data: wines
    })
}

export const getWineById = (req, res) => {
    const id = Number(req.params.id);

    const wine = wineService.getById(id);

    if (!wine) {
        return res.status(404).json({
            message: `Wine with id ${id} not found.`,
            data: null
        });
    }

    res.status(200).json({
        message: "Wine found.",
        data: wine
    });
};