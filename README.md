


※現在デプロイしておりません。

# サービス概要
このプロダクトは、イラストなど、なんらかの創作を趣味にしている人が、創作物をだれかにじっくり見てもらって感想をもらったり、創作活動を通じて人と関わりをもてるようにしたりといったことができるwebサービスです。ユーザーは、つくった作品の画像とその説明を書いた手紙を、ランダムに誰かと交換し、感想を送りあうことで、創作物をじっくり共有しあうことができます。また、友達となった相手とは創作活動を通して文通を続けることができます。こうすることで、普段SNS上であまり見られなかったり人と関われていなかったりする人でも、自分が何時間とかけて苦労してつくった作品をしっかりと見てもらうことができ、また、創作活動を通じて気軽に人と関われるようになります。

<br>
<br>

# 開発背景
一般的なSNSは、自由に発信でき、また誰にでもすぐアクセスできるという環境ですが、あまりに自由すぎてしまいます。その結果ユーザーは、わかりやすい価値のある人（数字持ってる人、能力ある人、同じ界隈でかなり近い距離にいる人）とばかり関わろうとしがちになります。近頃のSNS上には果てしない鍛錬を積んだプロクラスの人間も溢れ合えっており、一般レベルの人が自分の作品を見てもらったり、創作活動を通じて人とかかわったりといったことがなかなか難しい場合も多いと思われます。しかし、やはり作り手からすれば自分が何時間十何時間とかけてつくったものは幾らか誰かに見てもらいたいですし、孤独になりがちな創作活動において人とのかかわりが欲しくなることも多いです。
そこで、着実に作品を見せ合い感想を送りあうことができ、創作を通じて人とのかかわりを持てるサービスを作るに至りました。

# 操作画面

<table style="table-layout: fixed; width: 600;">
  <tr>
    <th>手紙交換開始画面</th>
    <th>手紙情報入力画面</th>
    <th>交換完了画面</th>
    <th>交換手紙閲覧画面</th>
  </tr>

  <tr>
    <td width="230"><img src="https://github.com/user-attachments/assets/4783f7ee-95f5-495c-8fc2-65917b25d17a" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/00eaf1ff-0545-4d81-a398-ef571a6156ce" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/ef69490e-6246-4587-958e-e985dc0b0500" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/684d3895-4790-4337-82cd-6aac273789e5" width="200"></td>
  </tr>

  <tr>
    <td>ボタンを押すと手紙送信のためのフォームが現れます。</td>
    <td>手紙のジャンルや希望のジャンルをもとに条件を満たす手紙とマッチングします。</td>
    <td>ボタンを押すと交換された手紙を閲覧できます。</td>
    <td>返事を送ることができます。</td>
  </tr>
</table>

<table style="table-layout: fixed; width: 600;">
  <tr>
    <th>交換手紙一覧画面</th>
    <th>交換手紙閲覧画面</th>
    <th>交換手紙閲覧画面（続き）</th>
    <th>交換手紙閲覧画面（続き）</th>
  </tr>

  <tr>
    <td width="230"><img src="https://github.com/user-attachments/assets/6afd0157-463f-4133-84b3-65018b314c44" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/daea37a2-635f-46b7-9885-5b0047a928c2" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/36f337cc-0874-4e5c-a889-689f646a30bf" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/11813aff-7032-49d0-8eea-a0062df7580f" width="200"></td>
  </tr>

  <tr>
    <td>これまでの交換の一覧が見られます。</td>
    <td>もらった手紙、送った感想、送った手紙、もらった感想を閲覧できます。</td>
    <td></td>
    <td></td>
  </tr>
</table>


<table style="table-layout: fixed; width: 600;">
  <tr>
    <th>文通相手一覧画面</th>
    <th>文通表示画面１</th>
    <th>文通表示画面２</th>
    <th>文通表示画面３</th>
  </tr>

  <tr>
    <td width="230"><img src="https://github.com/user-attachments/assets/c9c69e67-cefb-48d6-8c48-baf911cafdf8" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/835a3a00-0239-4f0e-81fb-0b5bc613635a" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/18a87247-2d78-430b-9cce-a319732f68fb" width="200"></td>
    <td width="230"><img src="https://github.com/user-attachments/assets/d2d530bc-5f7f-4807-9568-823a62634d07" width="200"></td>
  </tr>

  <tr>
    <td>文通中の相手一覧が表示されます。</td>
    <td>まずは一番最新の手紙が表示されます。一番最新の手紙なので返事を出すためのボタンが現れています。</td>
    <td>ひとつ前の手紙です。前後の手紙に移るためのボタンが表示されています。</td>
    <td>さらにひとつ前の手紙です。最初の手紙なので、次の手紙に移るボタンしか表示されていません。</td>
  </tr>
</table>

<br>
<br>

# 使用技術
<table>
  <tr>
    <th>category</th>
    <th>technology stock</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>Typescript Next.js TailwindCSS</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>Ruby on rails</td>
  </tr>
  <tr>
    <td>Database</td>
    <td>SQLite</td>
  </tr>
</table>

<br>
<br>
# ER図




