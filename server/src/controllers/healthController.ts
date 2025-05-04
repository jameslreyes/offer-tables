import { HealthController } from "@/types/controllers";

const healthController: HealthController = {
  check: (req, res) => {
    try {
      console.success(`healthController.ts --> check() --> Server is healthy`)
      res.status(200).json({
        success: true,
        message: 'OK'
      })
    } catch (error) {
      console.error(`healthController.ts --> check() --> Failed to check server health: ${error}`)
      res.status(500).json({
        success: false,
        error: error
      })
    }
  },
};

export default healthController;