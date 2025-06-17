import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Adress.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

export default function TimeZoneSelect() {
	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
		addresses: true,
		"About “Dashboard”": false,
		"About “Subscription”": false,
		"About “Buy more items”": false,
		"About “Support”": false,
	});

	const [openQuestions, setOpenQuestions] = useState<
		Record<string, Record<number, boolean>>
	>({});

	const toggleSection = (key: string) => {
		setOpenSections((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const toggleQuestion = (sectionKey: string, questionIndex: number) => {
		setOpenQuestions((prev) => ({
			...prev,
			[sectionKey]: {
				...prev[sectionKey],
				[questionIndex]: !prev[sectionKey]?.[questionIndex],
			},
		}));
	};

	const sections = [
		{
			key: "addresses",
			title: "About “Profile” ",
			text: [
				"How do I update my profile information?",
				"What should I do if I forget my password?",
			],
			items: [
				"You can update your profile information by navigating to the Profile Settings section and simply editing the input fields. Changes will be saved automatically.",
				'If you forget your password, go to the Profile Settings section and locate the "Forgot Password" option under the Personal Information tab. A password reset field will appear, allowing you to set a new password. Follow the on-screen instructions to complete the process.',
			],
		},
		{
			key: "About “Dashboard”",
			title: "About “Dashboard”",
			text: [
				"Where can I track my analytics?",
				"Can I change my business information through the dashboard?",
			],
			items: [
				"You can track your analytics in the Dashboard section, which provides data from Google Business and Yelp.",
				"No, the dashboard only allows you to view business information. Editing is not available.",
			],
		},
		{
			key: "About “Subscription”",
			title: "About “Subscription”",
			text: [
				"How do I top up or change my subscription?",
				"What happens if my payment fails?",
				"Can I pause or cancel my subscription?",
				"Will I lose my data if I cancel my plan?",
			],
			items: [
				"In the Subscription section, you can view your current plan, top up your balance, upgrade or change your plan, check added items, and review your transaction history.",
				"If a system error occurs, your funds will be refunded within a few days. If the payment is successful but your subscription does not update, please create a support ticket with a description of the issue, and we will assist you.",
				"If you do not make a payment, your subscription will automatically expire. To reactivate it complete the payment.",
				"No, your account data will be stored until the account is fully deleted.",
			],
		},
		{
			key: "About “Buy more items”",
			title: "About “Buy more items”",
			text: [
				"How do I purchase extra items or services?",
				"How quickly will I get my money back if I cancel my order?",
			],
			items: [
				"In the Buy More Items section, go to the Catalog subsection to select additional products. Complete your purchase through the Cart, and once paid, track your order in Order status & history.",
				"Your funds will be refunded within a few days. Please note that canceled orders cannot be reinstated—you will need to place a new order.",
			],
		},
		{
			key: "About “Support”",
			title: "About “Support”",
			text: ["How can I contact customer support?"],
			items: [
				"Navigate to the Support section and create a ticket with a description of your issue. Our team will assist you as soon as possible.",
			],
		},
	];

	return (
		<div className={style["onboarding-container"]}>
			{sections.map(({ key, title, items, text }) => (
				<div key={key} className={style["onboarding-container__block"]}>
					{/* Section Header */}
					<div
						onClick={() => toggleSection(key)}
						className={style["onboarding-container__title"]}
					>
						<p>{title}</p>
						<div className={style["onboarding-container__wrraper"]}>
							<img
								src={ArrowIconSrc}
								alt="Toggle"
								className={`${style["onboarding-container__arrow"]} ${
									openSections[key] ? style["onboarding-container__arrow--open"] : ""
								}`}
							/>
						</div>
					</div>

					<AnimatePresence initial={false}>
						{openSections[key] && (
							<motion.div
								layout // 👈 ключ до плавної анімації
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, marginTop: 16 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className={style.onboarding}
							>
								{text.map((question, i) => {
									const isOpen = openQuestions[key]?.[i] || false;
									return (
										<div key={i} className={style.onboarding__wrraper}>
											<div
												onClick={() => toggleQuestion(key, i)}
												className={style.onboarding__block}
											>
												<p>{question}</p>
												<img
													src={ArrowIconSrc}
													alt="Toggle"
													className={`${style["onboarding-container__arrow"]} ${
														isOpen ? style["onboarding-container__arrow--open"] : ""
													}`}
												/>
											</div>

											<AnimatePresence initial={false}>
												{isOpen && (
													<motion.div
														initial={{ height: 0, opacity: 0 }}
														animate={{ height: "auto", opacity: 1 }}
														exit={{ height: 0, opacity: 0 }}
														transition={{ duration: 0.3, ease: "easeInOut" }}
														className={style.onboarding__dropdown}
													>
														<p>{items[i]}</p>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									);
								})}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}
