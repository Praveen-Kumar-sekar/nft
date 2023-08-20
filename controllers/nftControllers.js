const NFT = require("./../models/nftModel")



exports.getAllNfts = async(req, res) => {
    try {
        const nfts = await NFT.find();
        res.status(200).json(

            {
                status: "success",
                results: nfts.length,
                data: {
                    nfts: nfts,
                }
            }
        )

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "server error"
        })
    }

}

// POST METHOD
exports.createNft = async(req, res) => {
    try {
        const newNFT = await NFT.create(req.body);
        res.status(201).json({
            status: "sucess",
            data: {
                nft: newNFT,
            },
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "invalid data send form nft",
        });
    }

};

// single get
exports.getSingleNft = async(req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                nft
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "server error"
        })
    }

}

//patch method
exports.updateNft = async(req, res) => {

    try {
        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success updated",
            data: {
                nft,
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "invalid data send form nft",
        });
    }




}

// delete method
exports.deleteNft = async(req, res) => {
    try {
        await NFT.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "invalid data send form nft",
        });
    }



}