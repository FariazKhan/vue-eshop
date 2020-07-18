import ItemDetails from "@/components/view/ItemDetails";
import Inventory from "@/components/view/Inventory";

export const routes = [
	{
		path: '',
		component: Inventory
	},
	{
		path: '/item/:id',
		component: ItemDetails
	}
]