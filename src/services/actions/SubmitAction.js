import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import db from "../../FierbaseConfig";


export const ViewRecipeSuc = (data) => ({
    type: "VIEW_RECIPE_SUC",
    payload: data
});

export const ViewFavoriteRecipeSuc = (data) => ({
    type: "VIEW_FAVORITE_RECIPE_SUC",
    payload: data
});

export const AddRecipeSuc = () => ({
    type: "ADD_RECIPE_SUC",
});

export const SingleRecipeSuc = (data) => ({
    type: "SINGLE_RECIPE_SUC",
    payload: data
});

export const UpdateRecipeSuc = () => ({
    type: "UPDATE_RECIPE_SUC",
});

export const DeleteRecipeSuc = () => ({
    type: "DELETE_RECIPE_SUC",
});

export const FilterRecipeSuc = (data) => ({
    type: "FILTER_RECIPE_SUC",
    payload: data
})

export const AddRecipeAsync = (data) => {
    return async disptch => {
        try {
            await addDoc(collection(db, "recipes"), data);
            disptch(AddRecipeSuc());

        } catch (err) {
            console.log(err);
        }

    }
};

export const ViewRecipeAsync = () => {
    return async disptch => {
        const recipes = [];
        try {
            const res = await getDocs(collection(db, "recipes"));

            res.forEach((doc) => {
                let newRec = doc.data();
                newRec.id = doc.id;

                recipes.push(newRec);
            });

            disptch(ViewRecipeSuc(recipes));
        }
        catch (err) {
            console.log(err);
        }

    }
};

export const ViewFavoriteRecipeAsync = () => {
    return async disptch => {
        const recipes = [];
        try {
            const res = await getDocs(collection(db, "favorites"));

            res.forEach((doc) => {
                let newRec = doc.data();
                newRec.id = doc.id;

                recipes.push(newRec);
            });

            disptch(ViewFavoriteRecipeSuc(recipes));
        }
        catch (err) {
            console.log(err);
        }

    }
};

export const SingleRecipeAsync = (id) => {
    return async disptch => {

        const res = await getDoc(doc(db, "recipes", `${id}`));

        if (res.exists()) {
            let newRec = res.data();
            newRec.id = res.id;

            disptch(SingleRecipeSuc(newRec));
        } else {
            console.log("No such document!");
        }
    }
};

export const UpdateRecipeAsync = (data) => {

    return async disptch => {
        try {
            await setDoc(doc(db, "recipes", `${data.id}`), data);
            disptch(UpdateRecipeSuc());

        } catch (err) {
            console.log(err);
        }

    }
};

export const DeleteRecipeAsync = (id, api) => {

    return async disptch => {
        try {
            await deleteDoc(doc(db, `${api}`, `${id}`));
            disptch(ViewRecipeAsync());
            disptch(ViewFavoriteRecipeAsync());

        } catch (err) {
            console.log(err);
        }

    }
};

export const FilterRecipeAsync = (data) => {

    return async disptch => {
        const recipes = [];
        try {
            const res = await getDocs(collection(db, "recipes"));

            res.forEach((doc) => {
                let newRec = doc.data();
                newRec.id = doc.id;

                recipes.push(newRec);
            });

            const filteredData = recipes.filter(item =>
                item.name.toLowerCase().includes(data.toLowerCase())
            );

            disptch(FilterRecipeSuc(filteredData))
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const FavoriteRecipeAsync = (id) => {

    return async disptch => {
        const res = await getDoc(doc(db, "recipes", `${id}`));
        
        if (res.exists()) {
            let newRec = res.data();
            newRec.favorite = true;
            
            await setDoc(doc(db, "recipes", `${id}`), newRec);
            await addDoc(collection(db, "favorites"), newRec);

            disptch(ViewRecipeAsync());
        } else {
            console.log("No such document!");
        }
    }
} 