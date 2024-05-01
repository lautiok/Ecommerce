import {useId} from 'react'

export const Filter = ({setSelectedCategory, setSelectedPrice, selectedPrice}) => {
    const categoryID = useId();
    const priceID = useId();
  return (
            <div className='filter-options'>
                <label htmlFor={categoryID}>Categoría:</label>
                <select id={categoryID} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Todas</option>
                    <option value="indumentaria">Indumentaria</option>
                    <option value="casco">Cascos</option>
                    <option value="accesorios">Accesorios</option>
                </select>

                <label htmlFor={priceID}>Precio:</label>
                <input type="range" id={priceID} min="70" max="200" onChange={(e) => setSelectedPrice(e.target.value)} value={selectedPrice || ''}  />
                <span>{selectedPrice || ''}$</span>
            </div>
  )
}
