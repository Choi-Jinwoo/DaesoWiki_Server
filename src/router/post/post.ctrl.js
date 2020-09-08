const models = require('../../models');
const PostLike = require('../../models/PostLike');

exports.post = async (req, res) => {
    const { body } = req;
    
    try {
        await models.post.create({
            title: body.title,
            content: body.content,
            category: body.category,
        })

        return res.status(200).json({
            message: "게시글 게시 성공",
        });

    }catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.like= async (req, res) => {
    const { body, user } = req;
    
    try {
        if (!user) {
            return res.status(401).json({
                message: "로그인 후 이용해주세요",
            });
        }

        const existLike =await models.PostLike.findOne({
            where: {
                userId: user.id,
                postIdx: body.postIdx
            },
        })

        if (existLike) {
            if (existLike == user) {
                return res.status(200).json({
                    message: "좋아요 취소",
                });
            }
            else {
                return res.status(200).json({
                    message: "좋아요 성공",
                });
            }
        }
        
    } catch (err) {
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}