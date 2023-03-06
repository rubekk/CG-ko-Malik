<script type="text/javascript">
	import './app.css';
	import './media.css';
	import { langObj, itemObj } from './stores/store';
	import html2canvas from 'html2canvas';

	const link="https://todopomo.netlify.app",
		fbLink=`https://facebook.com/share.php?u=${link}`,
		twitterLink=`https://twitter.com/share?url=${link}`,
		linkedinLink=`https://linkedin.com/sharing/share-offsite/?url=${link}`,
		redditLink=`https://reddit.com/submit?url=${link}`;

	let totalMoney=118692357000, 
		cartMoney= 0,
		cartItemCount= 0,
		lang="en",
		langData={},
		itemData=[],
		billNo=Math.floor(Math.random()*12345)+10000,
		billElem;

	langObj.subscribe(value=>langData=value);
	itemObj.subscribe(value=>itemData=value);

	for(let i=0;i<itemData.length-1;i++){
		for(let j=0;j<itemData.length-i-1;j++){
			if(itemData[j].price>itemData[j+1].price){
				let temp=itemData[j];
				itemData[j]=itemData[j+1];
				itemData[j+1]=temp;
			}
		}
	}
	
	const handlePlus=index=>{
		if(totalMoney-itemData[index].price>=0){
			itemData[index].ordered++;
			totalMoney=calculateCart();
			calculateCartItemCount();
		} 
		if(itemData[index].ordered>itemData[index].maxOrder){
			itemData[index].ordered=itemData[index].maxOrder;
			totalMoney=calculateCart();
		}
	}

	const handleMinus=index=>{
		if(itemData[index].ordered>0){
			itemData[index].ordered--;
			totalMoney=calculateCart();
			calculateCartItemCount();
		}
	}

	const handleInput=index=>{
		totalMoney=calculateCart();

		if(totalMoney<0){
			itemData[index].ordered=0;
			totalMoney=calculateCart();
			itemData[index].ordered=Math.floor(totalMoney/itemData[index].price);
			totalMoney=calculateCart();
		}
		else if(itemData[index].ordered>itemData[index].maxOrder){
			itemData[index].ordered=itemData[index].maxOrder;
			totalMoney=calculateCart();
		}
		else if(itemData[index].ordered<0){
			itemData[index].ordered=0;
			totalMoney=calculateCart();
		}

		calculateCartItemCount();
	}

	const calculateCart=()=>{
		cartMoney=0;

		itemData.forEach(item=>{
			if(item.price==null) return;
			cartMoney+=(item.price*item.ordered);
		})

		return 118692357000-cartMoney;
	}

	const insertCommas=number=>{
		let numInStr=number.toString();

		if(numInStr.length<=3) return numInStr;
		else{
			// return numInStr.
		}
	}
	insertCommas(123)

	const calculateCartItemCount=()=>{
		cartItemCount=0;
		itemData.forEach(item=>{
			if(item.ordered>0) cartItemCount++;
		})
	}

	const downloadBill=()=>{
		html2canvas(billElem, {
			removeContainer: false
		}).then(function(canvas) {
			const imgURL = canvas.toDataURL('image/png');
			const anchor = document.createElement('a');

			anchor.setAttribute('href',imgURL);
			anchor.setAttribute('download',`cgbill.png`);
			anchor.click();
		});
    }
</script>

<div class="header">
	<div class="header-left">
		<div class="header-title">
			<h1 class={lang=="np"?"np-title":""}>{lang=="en"?langData.webTitle.en:langData.webTitle.np}</h1>
			<p class="title-nepali">सकाएर सकिन्न</p>
		</div>
		<img src="./imgs/binod-chaudhary-1.png" alt="">
	</div>
	<div class="lang-section">
		<button class={lang=="en"?"en curr-lang":"en"} on:click={()=>lang="en"}>EN</button>
		<button class={lang=="np"?"np curr-lang":"np"} on:click={()=>lang="np"}>NP</button>
	</div>
</div>

<div class="container">
	<div class="items">
		{#each itemData as item,index}
			<div class="ind-item">
				<div class="item-img">
					<img src={item.img} alt="">
				</div>
				<div class="item-right">
					<div class="right-one">
						<button class="minus-btn" on:click={()=>handleMinus(index)}>
							<i class="fa-solid fa-minus"></i>
						</button>
						<input type="number" bind:value={item.ordered} on:input={()=>handleInput(index)}>
						<button class="plus-btn" on:click={()=>handlePlus(index)}>
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>
					<div class="right-two">
						<div class="item-title">{lang=="en"?item.enName:item.npName}</div>
						<div class="item-price">{lang=="en"?langData.rupees.en:langData.rupees.np} <span>{item.price}</span></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="item-money">
	<div class="cart-section">
		<span>
			<span class="item-money-num">{cartItemCount}</span>
			{lang=="en"?langData.item.en:langData.item.np}
		</span>
		{#if cartItemCount>0}
			<a class="view" href="#cart">{lang=="en"?langData.view.en:langData.view.np}</a>
		{/if}
	</div>
	<div class="money-section">
		{lang=="en"?langData.rupees.en:langData.rupees.np} <span class="item-money-num">{totalMoney}</span>
	</div>
</div>

{#if cartItemCount>0}
<div bind:this={billElem} class="cart" id="cart">
	<div class="cart-head">
		<img src="./imgs/namaste-right.png" alt="">
		<h2 class="cart-title">{lang=="en"?langData.webTitle.en:langData.webTitle.np} {lang=="en"?langData.priLi.en:langData.priLi.np}</h2>
		<img src="./imgs/namaste-left.png" alt="">
	</div>
	<div class="bill-date">
		<div class="bill-no-sec">
			<span>{lang=="en"?langData.billNo.en:langData.billNo.np}:</span>
			<span class="bill-date-values">{billNo}</span>
		</div>
		<div class="date-sec">
			<span>{lang=="en"?langData.date.en:langData.date.np}:</span>
			<span class="bill-date-values">{(new Date()).getDate()+"/"+(new Date()).getMonth()+"/"+(new Date()).getFullYear()}</span>
		</div>
	</div>
	{#each itemData as item}
	{#if item.ordered>0}
		<div class="ind-cart-item">
			<div class="cart-item-name name-col">{item.npName}</div>
			<div class="ind-cart-item-right">
				<div class="cart-item-count unit-col">{item.ordered}</div>
				<div class="cart-item-total total-col">{lang=="en"?langData.rupees.en:langData.rupees.np} {item.price * item.ordered}</div>
			</div>
		</div>
	{/if}
	{/each}
	{#if cartItemCount>0}
		<div class="cart-total">
			<div class="overall-total-txt name-col">{lang=="en"?langData.total.en:langData.total.np}</div>
			<div class="overall-total total-col">{lang=="en"?langData.rupees.en:langData.rupees.np} {cartMoney}</div>
		</div>
	{/if}
	<div class="cart-last">
		<div class="italic">* {lang=="en"?langData.refundable.en:langData.refundable.np}</div>
		<div class="cart-share italic">
			<i class="fa-solid fa-download" on:click={downloadBill}></i>
		</div>
	</div>
</div>
{/if}

<div class="footer">
	<div class="mobile-b-img">
		<img class="mb-1" src="./imgs/binod-chaudhary-ai.png" alt="binod img">
	</div>
	<img class="b-1" src="./imgs/binod-chaudhary-ai.png" alt="binod img">
	<img class="b-2" src="./imgs/binod-chaudhary-ai.png" alt="binod img">
	<div class="share" style={cartItemCount==0?"margin-top: 1.5rem":""}>
		<h3>{lang=="en"?langData.sharePage.en:langData.sharePage.np}</h3>
		<div class="social-medias">
			<li>
				<a href={fbLink} target="_blank"><i class="fa-brands fa-square-facebook blue-medias"></i></a>
			</li>
			<li>
				<a href={twitterLink} target="_blank"><i class="fa-brands fa-square-twitter green-medias"></i></a>
			</li>
			<li>
				<a href={linkedinLink} target="_blank"><i class="fa-brands fa-linkedin blue-medias"></i></a>
			</li>
			<li>
				<a href={redditLink} target="_blank"><i class="fa-brands fa-square-reddit green-medias"></i></a>
			</li>
		</div>
	</div>

	<div class="credit">
		<p>{lang=="en"?langData.createdBy.en:langData.createdBy.np} <a href="https://www.linkedin.com/in/rubekk/" target="_blank">{lang=="en"?langData.creator.en:langData.creator.np}</a></p>
		<p>{lang=="en"?langData.inspiredBy.en:langData.inspiredBy.np} <a href="https://www.neal.fun/spend" target="_blank">{lang=="en"?langData.inspiror.en:langData.inspiror.np}</a></p>
	</div>
</div>