import 'dotenv/config'
import { get } from 'env-var'

export const environments = {
    PORT: get('PORT').required().asPortNumber(),
    DB_URL: get('DB_URL').required().asString(),
}