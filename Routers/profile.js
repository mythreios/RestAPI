const router = require('express').Router();

const profileStore = require('../Others/profiles.json');

router.get('/', async ( req, res ) => {
    res.status(200).json(profileStore);
})

router.post("/:id", async ( req, res ) => {
    let { nickname, surname, age, id, iconURL } = req.body;
    if ( !nickname || !surname || !age || !id || !iconURL ) {
        return res.status(400).json({message: "Missing content!"});
    }

    let newProfile = {
        id: id,
        nickname: nickname,
        surname: surname,
        age: age,
        icon: iconURL
    }

    profileStore.allProfiles.push(newProfile)

    res.status(200).json({message: "Success!", profile: newProfile})
})

router.get('/:id', async ( req, res ) => {
    let { id } = req.params;
    let found = profileStore.allProfiles.find(profile => profile.id === parseInt(id));
    if ( found ) {
        res.status(200).json(found);
        return
    }

    res.status(400).json({ errorMessage: `${id} id numarasına sahip bir profil bulunamadı!` });
    return; 
})

router.delete('/:id', async ( req, res ) => {
    let { id } = req.params;
    if ( profileStore.allProfiles.find(x => x.id === parseInt(id)) ) {

        let filteredIds = profileStore.allProfiles.filter(x => x.id !== parseInt(id));
        console.log(filteredIds);
    
        profileStore.allProfiles = filteredIds;
        res.status(200).json({message: "Success"});
        return;
    }

    res.status(400).json({message: "Error"});
})

module.exports = router;