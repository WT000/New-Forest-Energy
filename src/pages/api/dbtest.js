import dbConnect from "@/db/dbcon/dbcon";

export default async function handler(req, res) {
    try {
        // await dbConnect() - This would be done if using models
        const con = await dbConnect();

        if (con) {
            let conState;
            switch (con.connections[0]._readyState) {
                case 0:
                    conState = "disconnected";
                    break;

                case 1:
                    conState = "connected";
                    break;

                case 2:
                    conState = "connecting";
                    break;

                case 3:
                    conState = "disconnecting";
                    break;
            };
            
            res.status(200).json({
                success: true,
                env: process.env.NODE_ENV,
                connection: conState,
            });
        } else {
            res.status(500).json({error: "Couldn't connect"});
        }
    } catch (e) {
        res.status(500).json({ error: e });
    }
  }
  