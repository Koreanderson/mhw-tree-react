import React from 'react'

const InventoryContext = React.createContext({
  inventory: [''],
  setInventory: () => {}
});

export const InventoryProvider = InventoryContext.Provider
export default InventoryContext
