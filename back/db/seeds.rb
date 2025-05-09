# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

5.times do |n|
    User.create!(
        name:"kiri#{n+1}",
        nickname:"kiri#{n+1}",
        email:"test#{n+1}@test.com",
        profile:"お絵描きしています。主にデジタルで描いていますが、アナログで描くのも好きです。しばしば透明水彩や鉛筆使って描いたりもしています。#{n+1}",
        status:0
    )
end

User.find(1).avatar.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_7426f70a9471-fb22-4122-bfaa-c03c8a7cfe56.png')),
filename: 'DEFAULTIMG_7426f70a9471-fb22-4122-bfaa-c03c8a7cfe56.png')

User.find(3).avatar.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_7155d6257b28-c2e7-4224-8aaf-ca9abe99b32e.png')),
filename: 'DEFAULTIMG_7155d6257b28-c2e7-4224-8aaf-ca9abe99b32e.png')

User.find(2).avatar.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_7211aeda7737-dad8-4cde-aca6-3476ff4ac31a.png')),
filename: 'DEFAULTIMG_7211aeda7737-dad8-4cde-aca6-3476ff4ac31a.png')

User.find(4).avatar.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_7313e4fc6365-6b45-4f0e-b443-d79adc97cdd4.png')),
filename: 'DEFAULTIMG_7313e4fc6365-6b45-4f0e-b443-d79adc97cdd4.png')

User.find(4).avatar.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_739438dc72a2-e5b1-460b-b5f8-f5a337c56875.png')),
filename: 'DEFAULTIMG_739438dc72a2-e5b1-460b-b5f8-f5a337c56875.png')


Genre.create!(
    [
        
        {name:'digitalillust'},
        {name:'analogillust'},
        {name:'CG'},
        {name:'movie'},
        {name:'photo'},
        {name:'music'},
        {name:'literature'},
        {name:'3D'},
        {name:'cook'},
        {name:'others'},
        {name:'all'}
    ]
)

Friendrelation.create!(
    user1_id:1,
    user2_id:2
)

Friendapply.create!(
    [
        {applyer_id:3,
        applied_id:1}
    ]
)

exchange1=Exchangeletter.create!(
    user_id:3,
    description:'東方Projectのパチュリー・ノーレッジを描きました。魔法のエフェクトがバチバチにかっこいい感じの絵が描きたいと思って、こだわって書いてみました。こんな感じの、強烈な明暗の入ったイラスト結構好きなんですよね～',
    genre_id:1,
    isexchanged:true

)
exchange1.media.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTIMG_737539f6a9f0-dc3d-4645-861f-c2932905f0b9.png')),
filename: 'DEFAULTIMG_737539f6a9f0-dc3d-4645-861f-c2932905f0b9.png')

exchange2=Exchangeletter.create!(
        
            
                user_id:1,
                description:'ホロライブenのがうる・ぐらちゃんを描きました。Vtuberの中でもがうる・ぐらちゃんが一番好きです、本当に可愛い。この絵はバレンタインのときに描いたやつなんですー。',
                genre_id:1,
                isexchanged:true
           
)
exchange2.media.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTunicode51c32066-7ccb-4504-aac3-5f406a3653e6.png')),
filename: 'DEFAULTunicode51c32066-7ccb-4504-aac3-5f406a3653e6.png')

exchange3=Exchangeletter.create!(
    user_id:2,
    description:'東方Projectのリグル・ナイトバグを描きました。リグルちゃんの元気な感じがとてもかわいいです。膨らんだ感じのズボンとかも可愛くて好きですね。背景は全然描かなかったけど、ざっくり暗くして蛍っぽいのを入れられてよかったです。',
    genre_id:1,
    isexchanged:true
)

exchange3.media.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTunicode622bcf30-b74d-458a-b30e-cebd441d9525.png')),
filename: 'DEFAULTunicode622bcf30-b74d-458a-b30e-cebd441d9525.png')

exchange4=Exchangeletter.create!(
    user_id:1,
    description:'東方Projectの封獣ぬえを描きました。ぬえちゃんはほんと、キャラデザも素敵だしかわいいです。羽の喰らいグラデーションとか、ぬえらしく正体不明感でててホント好きです。こういう腕を上げたポーズに角度がつくと描くの難しいですが、勢い任せで描き切りました！',
    genre_id:1,
    isexchanged:true
)

exchange4.media.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTunicodefbb8161d-f896-44ff-bd7c-0a0eb5781a18.png')),
filename: 'DEFAULTunicodefbb8161d-f896-44ff-bd7c-0a0eb5781a18.png')

exchange5=Exchangeletter.create!(
    user_id:4,
    description:'東方Projectのソシャゲの東方幻想エクリプスで出てきたバレンタインこいしちゃんを描きました。淡い色合いが美しくて好きです。エクリプスのキャラデザは最高だと思います！',
    genre_id:1,
)

exchange5.media.attach(io: File.open(Rails.root.join('app/assets/images/DEFAULTunicodeff9d91b6-36e0-4560-9800-bd84aaa7efe2.png')),
filename: 'DEFAULTunicodeff9d91b6-36e0-4560-9800-bd84aaa7efe2.png')




Exchangematch.create!(
    [
        {
            letter1_id:1,
            letter2_id:2
        },
        {
            letter1_id:2,
            letter2_id:1
        },
        {
            letter1_id:3,
            letter2_id:4
        },
        {
            letter1_id:4,
            letter2_id:3
        }
    ]
)


Reply.create!(
    [
        {
            text:'すごくかっこいいですね、めっちゃ上手いです！光っている目もかっこいいし、かわいいです！',
            toletter_id:1,
            user_id:1
        },
        {
            text:'かわいいです！座っているポーズが子供っぽい感じにもなっていてかわいいですね～。上目遣いっぽいのも良いです👍',
            toletter_id:3,
            user_id:1
        },
        {
            text:'すごくかわいいし、美麗で上手ですね！ぐらちゃん可愛いですよね～。照れた感じの表情が最高です！',
            toletter_id:2,
            user_id:3

        },
        {
            text:'かわいいですね～、難しいポーズなのに綺麗にかけててすごいです！背景も勢いや解放感があってすごくいいですね！',
            toletter_id:4,
            user_id:2
        }
    ]
)







Genreexpectation.create!(
    [
        {
            exchangeletter_id:1,
            genre_id:1
        },
        {
            exchangeletter_id:2,
            genre_id:1
        },
        {
            exchangeletter_id:3,
            genre_id:1
        },
        {
            exchangeletter_id:5,
            genre_id:1
        }
    ]
    
)


buntsu1=Buntsuletter.create(
    
    author_id:2,
    partner_id:1,
    text:'今日はシャーペンでドレミーと茨木華扇を描きました。この華扇みたいな斜めがお難しい、、、。',
    islatest:false
)
buntsu1.media.attach(io: File.open(Rails.root.join('app/assets/images/無題30_20250313200501.png')),
filename: '無題30_20250313200501.png')
buntsu1.media.attach(io: File.open(Rails.root.join('app/assets/images/無題36_20250322201203.png')),
filename: '無題36_20250322201203.png')


buntsu2=Buntsuletter.create!(
    author_id:1,
    partner_id:2,
    text:'わ～とても素敵ですねー。鉛筆の絵って好きです。その角度の顔難しいのに上手に描けていてすごいです。私は今日は水彩で東方異形郷の異形魔理沙を描きました。透明水彩は全然素人ですが、触っていて楽しいです。',
    previousletter_id:1,
    islatest:false
)
buntsu2.media.attach(io: File.open(Rails.root.join('app/assets/images/無題28_20250203115906.png')),
filename: '無題28_20250203115906.png')


buntsu3=Buntsuletter.create!(
    author_id:2,
    partner_id:1,
    text:'素晴らしい～。タッチが力強い！最近私はデジタルで諏訪子描きました！',
    previousletter_id:2,
    islatest:true
)
buntsu3.media.attach(io: File.open(Rails.root.join('app/assets/images/referenceimagefromWebRef (2).jpeg')),
filename: 'referenceimagefromWebRef (2).jpeg')