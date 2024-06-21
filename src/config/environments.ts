import 'dotenv/config'
import { get } from 'env-var'

export const environments = {
    PORT: get('PORT').required().asPortNumber()
}