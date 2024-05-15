import LoginPage from "../pages/LoginPage";
import { wrapper } from "./utils/renderUI";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const setup = () => {
    return render(React.createElement(LoginPage, null), { wrapper: props => wrapper(props, { route: '/' }) });
};
test('보기 버튼을 선택하면 모달이 화면에 보인다.', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: '보기' }));
    await waitFor(() => {
        expect(screen.getByText('모달오픈')).toBeInTheDocument();
    });
});
