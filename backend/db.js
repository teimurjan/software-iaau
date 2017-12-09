import c from 'config';
import Sequelize from 'sequelize';

function initSequelize() {
  if (!c.has('db')) {
    throw new Error('No Database config!')
  }
  return new Sequelize(c.get('db'));
}
const sequelize = initSequelize();
export default sequelize;